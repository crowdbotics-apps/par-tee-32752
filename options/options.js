import { StyleSheet } from "react-native"
const path = "/modules/terms-and-conditions/"
const title = "Terms And Conditions"
const styles = StyleSheet.create({
  heading: {
    height: 60,
    backgroundColor: "#333333",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "center"
  },

  text: {
    color: "#000000",
    fontSize: 16,
    width: "100%"
  },

  icon: { width: 18, height: 16 },
  touchableopacity: { padding: 5 },
  scrollview: { flex: 1, padding: 20 },
  header: { color: "#fff", fontSize: 16 }
})

export const globalOptions = {
  name: "par_tee_32752",
  url: "https://par_tee_32752.botics.co",
  api: "https://par_tee_32752.botics.co/api/v1"
}

export const modulesOptions = {
  "@modules/app-menu": { copy: "Routes available!" },
  "@modules/terms-and-conditions": { title: title, path: path, styles: styles },
  "@modules/login": {
    LOGO_URL:
      "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/cb-icon.png",
    BACKGROUND_URL:
      "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/halfbg.png",
    HOME_SCREEN_NAME: "Home Screen",
    validateEmail: "^[^\\s]+([.-]?\\w+)*@\\w+([.-]?\\w+)*(.\\w{2,3})+$",
    SignInNavText: "Sign In",
    SignUpNavText: "Sign Up",
    SignInButtonText: "Login",
    SignUpButtonText: "Sign Up"
  }
}
