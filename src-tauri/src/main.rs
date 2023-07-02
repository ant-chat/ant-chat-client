// release mode 에서 Windows의 추가 콘솔창을 방지 합니다.
// ## 절대 지우지 마세요!! ##
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod handler;
mod model;
mod proto;

use handler::auth;

#[tokio::main]
async fn main() {
    tauri::Builder::default()
        // .invoke_handler(tauri::generate_handler![greet])
        .invoke_handler(tauri::generate_handler![auth::sign_up])
        // .invoke_handler(tauri::generate_handler![auth_handler::sign_up])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
