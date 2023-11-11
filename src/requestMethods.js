import axios from "axios";

const BASE_URL = "https://ecom-backend-4swv.onrender.com/api/";
const TOKEN =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTZkZTc1YjgxZGVjOTY3ZmJkZWQ5MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NzYwOTgzMSwiZXhwIjoxNjg3ODY5MDMxfQ.rhsvcc8Hkt9QELBIbKZHMwZsTZsnmB9i1gvcydfLA_4";

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	headers: { token: `Bearer ${TOKEN}` },
});
