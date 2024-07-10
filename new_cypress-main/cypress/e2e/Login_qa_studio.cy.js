import * as main_page from "../locators/main_page.json";
import * as recovery_password_page from "../locators/recovery_password_page.json"
import * as result_page from "../locators/result_page.json"
import * as data from "../helpers/login_qa_data.json"

describe('Проверка авторизации', function () {

    beforeEach('Начало теста', function () {
         cy.visit('/');
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
           });

    afterEach('Конец теста', function () {
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        });

   it('Верный логин и верный пароль', function () {

        cy.get(main_page.email).type(data.login);
        cy.get(main_page.password).type(data.password);
        cy.get(main_page.login_button).click();
        cy.get(result_page.title).contains('Авторизация прошла успешно');
        cy.get(result_page.title).should('be.visible');
     
    })

   it('Проверка восстановления пароля ', function () {
        
        cy.get(main_page.forgot_pass_btn).click();
        cy.get(recovery_password_page.email).type(data.login);
        cy.get(recovery_password_page.send_button).click();
        cy.get(result_page.title).contains('Успешно отправили пароль на e-mail');
        cy.get(result_page.title).should('be.visible');
   
    })

   it('Верный логин, не верный пароль', function () {
        
        cy.get(main_page.email).type(data.login);
        cy.get(main_page.password).type('iLoveqastudio4');
        cy.get(main_page.login_button).click();
        cy.get(result_page.title).contains('Такого логина или пароля нет');
        cy.get(result_page.title).should('be.visible');
      
    })

   it('Не верный логин и верный пароль', function () {
        
        cy.get(main_page.email).type('german777@dolnikov.ru');
        cy.get(main_page.password).type(data.password);
        cy.get(main_page.login_button).click();
        cy.get(result_page.title).contains('Такого логина или пароля нет');
        cy.get(result_page.title).should('be.visible');
   
    })

   it('Проверка валидации на наличие @ в имене пользователя ', function () {
        
        cy.get(main_page.email).type('germandolnikov.ru');
        cy.get(main_page.password).type(data.password);
        cy.get(main_page.login_button).click();
        cy.get(result_page.title).contains('Нужно исправить проблему валидации');
        cy.get(result_page.title).should('be.visible');
   
    })

   it('Проверка на приведение к строчным буквам в логине', function () {
        
        cy.get(main_page.email).type('GerMan@Dolnikov.ru');
        cy.get(main_page.password).type(data.password);
        cy.get(main_page.login_button).click();
        cy.get(result_page.title).contains('Такого логина или пароля нет');
   
    })
})


// запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
