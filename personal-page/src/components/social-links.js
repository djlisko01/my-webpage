import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const SOCIAL_ICONS = [faLinkedin, faGithub, faTwitter];

function SocialIcons() {
  return (
    <div style={{ display: "flex", "justify-content": "center" }}>
      <div className="social-links">
        {SOCIAL_ICONS.map((icon) => {
          return (
            <span className="icon-border">
              <FontAwesomeIcon icon={icon} />
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default SocialIcons;
