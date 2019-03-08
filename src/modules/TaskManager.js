import APIManager from "./APIManager"
import Settings from "./Settings"

export default Object.create(APIManager, {
  desiredDatabase: {
    value: "tasks"
  },
  getAll: {
    value: function () {
      return fetch(`${Settings.remoteURL}/${this.desiredDatabase}?isCompleted=false`)
        .then(r => r.json())
    }
  },
})

