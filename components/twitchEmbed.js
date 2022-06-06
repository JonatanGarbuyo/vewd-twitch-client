import styles from './twitchEmbed.module.css'

export default function TwitchEmbed({
  channel,
  parent = 'localhost',
  autoplay = true,
}) {
  return (
    <>
      <div id="twitch-embed" className={styles.embed}>
        {/* <iframe src="https://player.twitch.tv/?channel=oscarfilms&parent=www.example.com" 
        frameborder="0" 
        allowfullscreen="true" 
        scrolling="no" 
        height="378"
         width="620"></iframe> */}

        <iframe
          className={styles.iframe}
          src={`https://player.twitch.tv/?channel=${channel}&parent=${parent}&autoplay=${autoplay}&muted=false`}
          height="100%"
          width="100%"
          importance="high"
          allowFullScreen
        ></iframe>
      </div>
    </>
  )
}
