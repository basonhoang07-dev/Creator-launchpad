const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { email, first_name, fields } = JSON.parse(event.body);

  const response = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json',
      'api-key': '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'
    },
    body: JSON.stringify({
      email,
      attributes: {
        FIRSTNAME: first_name,
        INSTAGRAM_HANDLE: fields?.instagram_handle || '',
        UGC_GOAL: fields?.ugc_goal || '',
        EXPERIENCE_LEVEL: fields?.experience_level || '',
        BIGGEST_BLOCKER: fields?.biggest_blocker || ''
      },
      listIds: [3],
      updateEnabled: true
    })
  });

  if (!response.ok && response.status !== 204) {
    const err = await response.text();
    console.error('Brevo error:', err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to subscribe' }) };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true })
  };
};

module.exports = { handler };
