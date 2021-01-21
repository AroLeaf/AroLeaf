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
    return this.pronouns;
  }

  static twitter(id) {
    return new Pronouns('twitter', id);
  }
  static discord(id) {
    return new Pronouns('discord', id);
  }
  static github(id) {
    return new Pronouns('github', id);
  }
  static twitch(id) {
    return new Pronouns('twitch', id);
  }

  static async githubIdFromName(name) {
    const github = await axios.get(`https://api.github.com/users/${name}`);
    return github.data.id;
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