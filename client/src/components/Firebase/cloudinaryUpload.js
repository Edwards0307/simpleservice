const CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
const DEFAULT_AVATAR =
  "https://res.cloudinary.com/demo/image/upload/v1/samples/people/smiling-man.jpg";

export async function uploadFile(file) {
  if (!file) return DEFAULT_AVATAR;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    { method: "POST", body: formData }
  );
  const data = await res.json();
  if (!res.ok) throw new Error(data.error?.message || "Upload failed");
  return data.secure_url;
}

export async function uploadCardFile(file) {
  if (!file) return null;
  return uploadFile(file);
}
