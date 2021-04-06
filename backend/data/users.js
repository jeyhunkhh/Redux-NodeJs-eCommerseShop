import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Jeyhun Husenov',
        email: 'Jeyhun@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Ulvi Macid',
        email: 'Ulvi@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users