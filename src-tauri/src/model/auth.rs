use crate::proto::auth::{auth_client, SignUpRequest, SignUpResponse};

use auth_client::AuthClient;
use tonic::{transport::Endpoint, Request};

// pub fn sign_in(params: SignInRequest) -> SignInResponse {}

pub async fn sign_up(
    username: &str,
    password: &str,
) -> Result<SignUpResponse, Box<dyn std::error::Error>> {
    let addr = Endpoint::from_static("http://[::1]:50051");

    let mut client = AuthClient::connect(addr).await?;

    let request = Request::new(SignUpRequest {
        username: username.to_string(),
        password: password.to_string(),
    });

    let response = client.sign_up(request).await?;

    Ok(response.into_inner())
}
