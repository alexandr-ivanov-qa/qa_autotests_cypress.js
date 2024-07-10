describe('Проверка авторизации', function () {

   it('Верный логин и верный пароль', function () {
        cy.visit('http://login.qa.studio/');

        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

        cy.wait(50);


        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     

   
    })

   it('Проверка восстановления пароля ', function () {
        cy.visit('http://login.qa.studio/');

        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     

   
    })

   it('Верный логин, не верный пароль', function () {
        cy.visit('http://login.qa.studio/');

        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');


        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio4');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     

   
    })

   it('Не верный логин и верный пароль', function () {
        cy.visit('http://login.qa.studio/');

        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');


        cy.get('#mail').type('german777@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     

   
    })

   it('Проверка валидации на наличие @ в имене пользователя ', function () {
        cy.visit('http://login.qa.studio/');

        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');


        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     

   
    })

   it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('http://login.qa.studio/');

        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');


        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');
   
    })
})


// запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
