# MERN-skeleton

## Feature breakdown 

- **Sign up:** Users can register by creating a new account using an email
address.
- **User list:** Any visitor can see a list of all registered users.
- **Authentication:** Registered users can sign-in and sign-out.
- **Protected user profile:** Only registered users can view individual user
details after signing in.
- **Authorized user edit and delete:** Only a registered and authenticated user
can edit or remove their own user account details.

## User model

Field name | Type | Description
---------- | ---- | -----------
Name | String | Required field to store the user's name.
E-mail | String | Required unique field to store the user's email and identify each account (only one account allowed per unique email).
Password | String | A required field for authentication. The database will store the encrypted password and not the actual string for security purposes.
Created | Date | Automatically generated timestamp when a new user account is created
Updated | Date | Automatically generated timestamp when existing user details are updated.

## API endpoints for user CRUD

Operation | API Route | HTTP method
--------- | --------- | -----------
Create a user | */api/users* | POST
List all users | */api/users* | GET
Fetch a user | */api/users/:userId* | GET
Update a user | */api/users/:userId* | PUT
Delete a user | */api/users/:userId* | DELETE
User sign-in | */auth/signin* | POST
User sign-out | */auth/signout* | GET
