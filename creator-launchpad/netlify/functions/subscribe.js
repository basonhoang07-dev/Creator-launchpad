exports.handler = async function (event) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  const KIT_API_SECRET = 'DyRoXwjMEmju7c1wv9CKbNwEb1GPZPzfg_rrBM8yU2w';
  const KIT_FORM_ID = '9477479';

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }

  const { first_name, email, fields } = body;

  if (!email) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Email required' }) };
  }

  try {
    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${KIT_FORM_ID}/subscribe`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_secret: KIT_API_SECRET,
          first_name: first_name || '',
          email: email,
          fields: fields || {},
        }),
      }
    );

    const text = await response.text();
    console.log('Kit status:', response.status);
    console.log('Kit response:', text);

    let data;
    try { data = JSON.parse(text); } catch { data = { raw: text }; }

    if (data.subscription) {
      return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
    } else {
      console.log('Kit rejected:', JSON.stringify(data));
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Kit error', detail: data }) };
    }
  } catch (err) {
    console.log('Fetch error:', err.message);
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'Server error', detail: err.message }) };
  }
};
