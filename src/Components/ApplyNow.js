import React, { Component } from "react";
import "../assets/Css/ApplyNow.scss";

class ApplyNow extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.lsq_setupForm({
      id: "1180e7df-7faa-11ea-b944-0ac1020b43f8",
    });

  

  }

  //   utilityFunction = () => {
  //     if (PRIVATE_AUTH_KEY) {
  //       return PRIVATE_AUTH_KEY;
  //     } else {
  //       return PUBLIC_AUTH_KEY;
  //     }
  //   };
  render() {
    return (
      <div className="ApplyNowBanner1">
        <div className="ApplyNowBanner2">
          <p className="ApplyNowBannerheading">Apply Now</p>
          <div className="application-form">
            <div
              id="lsq-form-modal"
              data-form-id="1180e7df-7faa-11ea-b944-0ac1020b43f8"
              class="modal-v4 fullscreen external lsq-external-form-container"
              ref={(elem) => (this.lsqFormContainer = elem)}
            >
              <div class="lsq-form-container-wrapper"></div>
              <div class="lsq-form-hidden-fields">
                <input
                  id="lsq-authKey"
                  name="lsq-authKey"
                  type="hidden"
                  value="T1lzNllSRkdaZTFUb3ZvNENiMjZ0RjhXUnhYVnJCZUJiNWpEQTl6UjRRZXRwbXg3NFVoODlHOHNreGNXN0kraVEzK1R2anBEV21wQVNkNXZVZFBVVllndm4vMlFKT0I2V1p0L0pHek81aXl4K2lTMlpuQTdvZEpUalliTkcramhsRFdvYkZ2ZC9uQjZIN28vNlhWQldQc0NGY0RwZU45KzJCMk5tTUVQTlZyR2FVOVhJNGJBY01tem55YzBMQmpsc3JxR0YwTkszNURDa3MrSnp4S2haZz09"
                />
                <input
                  id="lsq-api-service-url"
                  name="lsq-api-service-url"
                  type="hidden"
                  value="https://portalapi-in21.leadsquared.com/api/Form"
                />
                <input
                  id="lsq-app-url"
                  name="lsq-app-url"
                  type="hidden"
                  value="https://in21.leadsquared.com"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ApplyNow;
