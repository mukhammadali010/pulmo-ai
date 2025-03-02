export interface LoginRequest{
    email:string;
    password:string;
}

export interface LoginResponse{
    email:string;
    tokens:{
        access:string,
        refresh:string,
    }
}

export interface RegisterRequest{
    email:string;
    first_name:string;
    last_name:string;
    password:string;
    password2:string;
}

export interface ChangePasswordRequest{
    old_passowrd:string;
    password:string;
    password2:string;
}

export interface UserProfile{
    username:string;
    first_name:string;
    last_name:string;
    email:string;
    phone:string;
}