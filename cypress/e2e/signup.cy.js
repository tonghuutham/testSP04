describe('Sign up', () => {
    before('Sign up', () => {
        cy.visit("https://hust-e-shopper.up.railway.app/")
        cy.contains("Đăng ký").click()
    })

    it('Test server dang ky dang ky thanh cong', () => {
        cy.request({
            method: 'POST',
            url: 'https://api-admin-dype.onrender.com/api/user/user',
            body: {
                username: 'yourusername5',
                email: 'youremail5@example.com',
                password: 'yourpassword',
                confirmPassword: 'yourpassword'
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
        })
    })

    it('Test server dang ky dang ky khong thanh cong', () => {
        cy.request({
            method: 'POST',
            url: 'https://api-admin-dype.onrender.com/api/user/user',
            body: {
                username: 'yourusername5',
                email: 'youremail5',
                password: 'yourpassword',
                confirmPassword: 'yourpassword'
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
        })
    })
})