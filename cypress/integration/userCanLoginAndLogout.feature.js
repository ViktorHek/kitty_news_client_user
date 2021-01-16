describe("user can login", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:articles_data.json",
    });
  });

  describe("successfully", () => {
    beforeEach(() => {
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/auth/sign_in",
        response: "fixture:user_can_register.json",
        headers: {
          uid: "registered@user.com",
          access_token: "test_token",
          client: "1337",
          token_type: "Bearer",
          expiry: 123456
        },
      });
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/auth/validate_token**",
        response: "fixture:user_can_register.json",
      });
      cy.route({
        method: 'POST',
        url: 'http://localhost:3000/api/auth/sign_in',
        response: { message: "login successfull"},
      })
      cy.visit("/");
    });
    it("with valid credentials", () => {
      cy.get("[data-cy='log-in-button']").click();
      cy.get("[data-cy='log-in-form']").within(() => {
        cy.get("[data-cy='log-in-email']").type("registered@user.com");
        cy.get("[data-cy='log-in-password']").type("password");
        cy.get("[data-cy='log-in-submit-btn']").click();
        // cy.get("[data-cy='log-in-button']").should("not.be.visible");
      });
      cy.get('[data-cy="log-in-success-message"]').contains(
        "login successfull"
      )
    });
  });

  describe("successfully", () => {
    beforeEach(() => {
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/auth/sign_in",
        response: "fixture:user_can_register.json",
        headers: {
          uid: "registered@user.com",
          access_token: "test_token",
          client: "1337",
          token_type: "Bearer",
          expiry: 123456
        },
      });
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/auth/validate_token**",
        response: "fixture:user_can_register.json",
      });
      cy.route({
        method: 'POST',
        url: 'http://localhost:3000/api/auth/sign_in',
        response: {
          data: {
            message: "login successfull"
          }
        },
      })
      cy.visit("/");
    });
    it("with valid credentials", () => {
      cy.get("[data-cy='log-in-button']").click();
      cy.get("[data-cy='log-in-form']").within(() => {
        cy.get("[data-cy='log-in-email']").type("registered@user.com");
        cy.get("[data-cy='log-in-password']").type("password");
        cy.get("[data-cy='log-in-submit-btn']").click();
        // cy.get("[data-cy='log-in-button']").should("not.be.visible");
      });
      cy.get('[data-cy="log-in-success-message"]').contains(
        "login successfull"
      )
    });
  });

  // describe("unsuccessfully", () => {
  //   it("with invalid credentials", () => {
  //     cy.route({
  //       method: "POST",
  //       url: "http://localhost:3000/api/auth",
  //       status: "401",
  //       response: {
  //         errors: {
  //           full_messages: ["Invalid login credentials. Please try again."],
  //         },
  //         success: false,
  //       },
  //     });
  //     cy.visit("/");
  //     cy.get("[data-cy='signup-button']").click();
  //     cy.get("[data-cy='signup-form']").within(() => {
  //       cy.get("[data-cy='login-email']").type("registered@user.com");
  //       cy.get("[data-cy='login-password']").type("password");
  //       cy.get("[data-cy='submit-btn']").click();
  //     });
  //     cy.get("[data-cy='register-error-message']").should(
  //       "contain",
  //       "Invalid login credentials. Please try again."
  //     );
  //   });
  //   it("when email is already taken", () => {
  //     cy.route({
  //       method: "POST",
  //       url: "http://localhost:3000/api/auth",
  //       status: "401",
  //       response: {
  //         errors: {
  //           full_messages: ["Email has already been taken"],
  //         },
  //         success: false,
  //       },
  //     });
  //     cy.visit("/");
  //     cy.get("[data-cy='signup-button']").click();
  //     cy.get("[data-cy='signup-form']").within(() => {
  //       cy.get("[data-cy='input-email']").type("registered@user.com");
  //       cy.get("[data-cy='input-password']").type("password");
  //       cy.get("[data-cy='input-password-confirmation']").type("password");
  //       cy.get("[data-cy='submit-btn']").click();
  //     });
  //     cy.get("[data-cy='register-error-message']").should(
  //       "contain",
  //       "Email has already been taken"
  //     );
  //   });
  // });
});
