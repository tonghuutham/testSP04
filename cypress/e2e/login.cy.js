describe('Login', () => {
    before('Login', () => {
        cy.visit("https://chat-real-time-production-1e8e.up.railway.app/")
    })

    // it('Test server dang nhap khong thanh cong', () => {
    //     cy.request({
    //         method: 'POST',
    //         url: 'https://api-admin-dype.onrender.com/api/login',
    //         body: {
    //             email: 'youruser@example.com',
    //             password: 'yourpassword'
    //         }
    //     }).then((response) => {
    //         expect(response.status).to.eq(404)
    //        // expect(response.body).to.have.property('message', 'Email does not exist')
    //     })
    // })
    it('Test server dang nhap thanh cong', () => {
        cy.request({
            method: 'POST',
            url: 'https://api-admin-dype.onrender.com/api/login',
            body: {
                email: 'youremail@example.com',
                password: 'yourpassword'
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
        })
    })


})