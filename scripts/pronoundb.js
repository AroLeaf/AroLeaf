class Pronouns {
  constructor(platform, id) {
    this.platform = platform;
    this.id = id;
  }

  async get() {
    const pronoundb = await axios.get(`https://pronoundb.org/api/v1/lookup?platform=${this.platform}&id=${this.id}`);
    this.pronouns = pronoundb.data.pronouns
    this.text = Pronouns.texts[this.pronouns]
    return this
  }

  toString() {
    return this.text;
  }

  static async twitter(id) {
    return await new Pronouns('twitter', id).get();
  }
  static async discord(id) {
    return await new Pronouns('discord', id).get();
  }
  static async github(id) {
    return await new Pronouns('github', id).get();
  }
  static async twitch(id) {
    return await new Pronouns('twitch', id).get();
  }

  static texts = {
    unspecified: 'unspecified',
    avoid: 'avoid pronouns, use my name',
    any: 'any pronouns',
    hh: 'he/him',
    hs: 'he/she',
    ht: 'he/they',
    shh: 'she/he',
    sh: 'she/her',
    st: 'she/they',
    th: 'they/he',
    ts: 'they/she',
    tt: 'they/them',
    other: 'other pronouns',
    other_ask: 'other pronouns (ask me)',
  };
}