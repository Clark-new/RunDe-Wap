export default {
  changeUrl(state, url) {
    state.url = url;
    localStorage.url = url;
  },
  changePlayState(state, status) {
    state.playState = status;
  },
  changeScreenState(state, status) {
    state.screenState = status;
  },
  setViewer(state, viewer) {
    state.viewer = viewer;
  },
  setTemplate(state, template) {
    state.template = template;
  },
  changeAllowChat(state, status) {
    state.allowChat = status;
  },
  changeVideoState(state, status) {
    state.isShowVideo = status;
  },
  changeAnnounceState(state, status) {
    state.showAnnounce = status;
  }
};
