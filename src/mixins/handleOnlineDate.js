
const isAfterOnlineDate = {
  computed: {
    isAfterOnlineDate() {
      const onlineDate = new Date(2020, 6, 13);
      const today = new Date();

      return onlineDate.getTime() < today.getTime();
    }
  }
}

export default isAfterOnlineDate;