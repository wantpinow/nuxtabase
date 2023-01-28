-- test users (regular user and admin)
INSERT INTO auth.users VALUES ('00000000-0000-0000-0000-000000000000', 'd4f82d09-e999-47ae-a29b-4b6b22d94025', 'authenticated', 'authenticated', 'user@test.com', '$2a$10$BO0VuHE9AyTqPk5N/wRvCurXm/dYXyGuaLGL0XK4GfoefNvGVHG8K', '2023-01-26 20:56:47.83114+00', NULL, '', NULL, '', NULL, '', '', NULL, '2023-01-26 20:56:47.835136+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2023-01-26 20:56:47.826294+00', '2023-01-26 20:56:47.837377+00', NULL, NULL, '', '', NULL, DEFAULT, '', 0, NULL, '', NULL);
INSERT INTO auth.users VALUES ('00000000-0000-0000-0000-000000000000', '86d583b0-1cd4-40e9-9074-75d10797687c', 'authenticated', 'authenticated', 'admin@test.com', '$2a$10$226juE7ojOs1WK9qYlkftukOC9kl/X6EDtXErSfBAVm3lOqHSDIVu', '2023-01-26 20:57:04.700782+00', NULL, '', NULL, '', NULL, '', '', NULL, '2023-01-26 20:57:04.703585+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2023-01-26 20:57:04.697147+00', '2023-01-26 20:57:04.705479+00', NULL, NULL, '', '', NULL, DEFAULT, '', 0, NULL, '', NULL);

-- test user identities
INSERT INTO auth.identities VALUES ('d4f82d09-e999-47ae-a29b-4b6b22d94025', 'd4f82d09-e999-47ae-a29b-4b6b22d94025', '{"sub": "d4f82d09-e999-47ae-a29b-4b6b22d94025"}', 'email', '2023-01-26 20:56:47.828874+00', '2023-01-26 20:56:47.828925+00', '2023-01-26 20:56:47.828929+00');
INSERT INTO auth.identities VALUES ('86d583b0-1cd4-40e9-9074-75d10797687c', '86d583b0-1cd4-40e9-9074-75d10797687c', '{"sub": "86d583b0-1cd4-40e9-9074-75d10797687c"}', 'email', '2023-01-26 20:57:04.698647+00', '2023-01-26 20:57:04.698674+00', '2023-01-26 20:57:04.698676+00');

-- set admin user as admin
select set_claim('86d583b0-1cd4-40e9-9074-75d10797687c', 'claims_admin', 'true');