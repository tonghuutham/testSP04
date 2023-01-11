
describe('Home Page', () => {
    beforeEach('Visits the Home Page', () => {
      cy.visit('https://hust-e-shopper.up.railway.app/')
    })

    it('Hien thi modal Dang nhap khi click vao Dang nhap', () => {
        cy.contains("Đăng nhập").click()
        cy.contains("Email").should("be.visible")
    })

    // it('Thong bao loi neu thieu email', ()=> {
    //     cy.contains("Đăng nhập").click()
    //     cy.contains("Email").should("be.visible")
    //     cy.get("input[name='email']").type('test@ltct.com')
    //     cy.get("button#btn-login").click()
    //     cy.get("Thiếu email hoặc mật khẩu.")
    // })

    // it('Thong bao loi neu thieu mat khau', ()=> {
    //     cy.contains("Đăng nhập").click()
    //     cy.contains("Email").should("be.visible")
    //     cy.get("input[name='password']").type('123456')
    //     cy.get("button#btn-login").click()
    //     cy.get("Thiếu email hoặc mật khẩu.")
    // })

    it('Thong bao loi neu thieu mat khau khi dang nhap', ()=> {
        cy.contains("Đăng nhập").click()
        cy.contains("Email").should("be.visible")
        cy.get("input[name='email']").type('test@ltct.com')
        cy.get("button#btn-login").click()
        cy.get("Thiếu email hoặc mật khẩu").should("be.visible")
    })

    it('Hien thi modal dang ki khi click vao Dang ky ngay tu modal Dang nhap',() => {
        cy.contains("Đăng nhập").click()
        cy.contains("Email").should("be.visible")
        cy.contains("Đăng ký ngay").click()
        cy.contains("Đăng ký nhanh").should("be.visible")
    })

    it('Hien thi modal Dang ky khi click vao Dang ky', () => {
        cy.contains("Đăng ký").click()
        cy.contains("Email").should("be.visible")
    })

    it('Thong bao loi neu thieu mat khau khi dang ky', ()=> {
        cy.contains("Đăng ký").click()
        cy.contains("Email").should("be.visible")
        cy.get("input[name='name']").type('test')
        cy.get("input[name='email']").type('test@ltct.com')
        cy.get("button#btn-signup").click()
        cy.get(".validate-icon").should("be.visible")
    })

    it('Thong bao loi neu thieu ho ten', ()=> {
        cy.contains("Đăng ký").click()
        cy.contains("Email").should("be.visible")
        cy.get("input[name='email']").type('test@ltct.com')
        cy.get("input[name='password']").type('123456')
        cy.get("input[name='confirmPassword']").type('123456')
        cy.get(".validate-icon").should("be.visible")
    })

    it('Thong bao loi neu dia chi email khong hop le', () => {
        cy.contains("Đăng ký").click()
        cy.contains("Email").should("be.visible")
        cy.get("input[name='name']").type('test')
        cy.get("input[name='email']").type('test')
        cy.get("input[name='password']").type('123456')
        cy.get("input[name='confirmPassword']").type('123456')
        cy.get(".validate-icon").should("be.visible")
    })

    it('Thong bao loi neu password và confirmPassword khong trung nhau', ()=> {
        cy.contains("Đăng ký").click()
        cy.contains("Email").should("be.visible")
        cy.get("input[name='name']").type('test')
        cy.get("input[name='email']").type('test@ltct.com')
        cy.get("input[name='password']").type('123456')
        cy.get("input[name='confirmPassword']").type('1234567')
        cy.get("input[name='confirmPassword']").should("be.visible")
    })


    it('Hien thi modal dang nhap khi click vao Dang nhap ngay tu modal Dang ky',() => {
        cy.contains("Đăng ký").click()
        cy.contains("Email").should("be.visible")
        cy.contains("Đăng nhập ngay!").click()
        cy.get("button#btn-login").should("be.visible")
    })

    it('Hien thi trang san pham khi click vao "Cua hang"', () => {
        cy.contains("Cửa hàng").click()
        cy.contains("Lọc theo giá").should("be.visible")
    })

    it('Hien thi box chat khi click vao "Đơn hàng"', () => {
        cy.contains("Đơn hàng").click()
        cy.contains("Giỏ hàng").should("be.visible")
    })

    it('Hien thi giỏ hàng khi click vao "Giỏ hàng"', () => {
        cy.contains("Đơn hàng").click()
        cy.contains("Giỏ hàng").click()
        cy.contains("Sản phẩm").should("be.visible")
        
    })

    it('Hien thi list categories with mock', () => {
        cy.intercept("GET", "https://hust-e-shopper.up.railway.app/", {
            fixture: "home.json"
        })
        cy.get("[class='row px-xl-5 pb-3']").find("[class='col-lg-4 col-md-6 pb-1']")
        .should("contain", "Polo")
        .should("contain", "Dress")
    })

    it('Hien thi list products with mock', () => {
        cy.intercept("GET", "https://hust-e-shopper.up.railway.app/", {
            fixture: "home.json"
        })
        cy.get("[class='row px-xl-5 pb-3']").find("[class='card product-item border-0 mb-4']")
        .should("contain", "aaaa1guibs1")
        .should("contain", "QU\u1ea6N JEAN NAM TR\u01a0N FORM SKINNY")
    })

})