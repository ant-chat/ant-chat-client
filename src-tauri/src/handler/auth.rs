use crate::proto::auth;

type TokioAwaitError = Box<dyn std::error::Error>;

#[tauri::command]
pub async fn sign_in(username: String, password: String) {}
