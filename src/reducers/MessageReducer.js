import uuid from 'uuid'

export default () => {
  return [
    {
      id: uuid.v4(),
      text: 'Tengo mucho dinero',
      picture: 'http://icons.iconarchive.com/icons/mattahan/ultrabuuf/128/Comics-Ironman-Red-icon.png',
      displayName: 'Iron Man',
      username: 'Tony Stark',
      date: Date.now(),
    },
    {
      id: uuid.v4(),
      text: 'Soy dracula 2.0',
      picture: 'https://a.wattpad.com/useravatar/xxbatmanbabyxx.128.904685.jpg',
      displayName: 'Batman',
      username: 'Bruce Wayne',
      date: Date.now() - 240000,
    },
    {
      id: uuid.v4(),
      text: 'Yo HULK yo GENTE!!',
      picture: 'http://files.gamebanana.com/img/ico/sprays/hulk_9.png',
      displayName: 'Hulk',
      username: 'Robert Bruce Banner',
      date: Date.now() - 360000,
    },
  ]
}
