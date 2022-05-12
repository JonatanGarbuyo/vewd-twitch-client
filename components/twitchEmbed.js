import styles from './twitchEmbed.module.css'

export default function TwitchEmbed({
  channel,
  autoplay = true,
  parent = 'localhost',
}) {
  return (
    <>
      <div id="twitch-embed" className={styles.embed}>
        <iframe
          className={styles.iframe}
          src={`https://embed.twitch.tv/?channel=${channel}&parent=${parent}&autoplay=${autoplay}&muted=false`}
          height="100%"
          width="100%"
          importance="high"
          allowFullScreen
        ></iframe>
      </div>
    </>
  )
}
