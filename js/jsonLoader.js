export async function loadJSON(name){const response=await fetch(`data/${name}`);if(!response.ok)throw new Error(`Không thể tải ${name}`);return response.json()}
