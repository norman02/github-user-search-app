import avatar from "../assets/avatar.jpg";
import location from "../assets/location.svg";
import link from "../assets/link.svg";
import twitter from "../assets/twitter.svg";
import company from "../assets/company.svg";
export default function ProfileCard() {
  return (
    <div data-testid="profile-card">
      <section data-testid="user">
        <img src={avatar} alt="" data-testid="avatar" />
        <h2 data-testid="name">The Octocat</h2>
        <p data-testid="username">@octocat</p>
        <p data-testid="date-joined">Joined 25 Jan 2011</p>
      </section>
      <section data-testid="bio">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>
      </section>
      <section data-testid="statistics">
        <table>
          <thead>
            <tr>
              <th>Repos</th>
              <th>Followers</th>
              <th>Following</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-testid="repos">8</td>
              <td data-testid="followers">3938</td>
              <td data-testid="following">9</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section data-testid="contact">
        <div>
          <img src={location} alt="" />
          <p data-testid="location">San Francisco</p>
        </div>
        <div>
          <img src={link} alt="" />
          <p data-testid="website-link">https://github.blog</p>
        </div>
        <div>
          <img src={twitter} alt="" />
          <p data-testid="twitter-link">Not Available</p>
        </div>
        <div>
          <img src={company} alt="" />
          <p data-testid="company">@github</p>
        </div>
      </section>
    </div>
  );
}
