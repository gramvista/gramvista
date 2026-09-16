import { MessageSquare, Users, Send, BarChart3 } from "lucide-react";
export function SmsPreview() {
  return (
    <div
      className="sms-preview"
      role="img"
      aria-label="Illustrative Gramvista SMS dashboard concept with empty SMS balance, contacts, campaigns and delivery reports, alongside a mobile companion"
    >
      <div className="sms-desktop">
        <div className="sms-top">
          <span>
            <MessageSquare size={15} />
            Gramvista SMS
          </span>
          <span>Workspace preview</span>
        </div>
        <div className="sms-body">
          <div className="sms-sidebar">
            <span className="selected">
              <BarChart3 size={13} />
              Overview
            </span>
            <span>
              <Users size={13} />
              Contacts
            </span>
            <span>
              <Send size={13} />
              Campaigns
            </span>
            <span>Delivery reports</span>
          </div>
          <div className="sms-main">
            <div className="sms-greeting">Business messaging</div>
            <p>A clear view of your communication.</p>
            <div className="sms-metrics">
              <div>
                <span>SMS balance</span>
                <strong>—</strong>
                <small>Ready for your account</small>
              </div>
              <div>
                <span>Contacts</span>
                <strong>—</strong>
                <small>Your audience, organized</small>
              </div>
            </div>
            <div className="sms-campaign">
              <strong>Campaign summary</strong>
              <div className="sms-empty">
                <Send size={22} />
                <span>Your campaigns will appear here.</span>
              </div>
            </div>
            <div className="sms-report">
              <span>Delivery report</span>
              <span>Awaiting campaign</span>
            </div>
          </div>
        </div>
      </div>
      <div className="sms-phone">
        <div className="phone-speaker" />
        <MessageSquare size={23} />
        <strong>Gramvista SMS</strong>
        <span>Messaging on the move.</span>
        <div>
          <small>SMS balance</small>
          <b>—</b>
        </div>
        <div>
          <small>Campaigns</small>
          <p>No campaigns yet</p>
        </div>
        <span className="phone-bottom" />
      </div>
      <p className="mockup-caption">Illustrative interface concept</p>
    </div>
  );
}
