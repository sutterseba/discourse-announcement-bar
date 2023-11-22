import { apiInitializer } from 'discourse/lib/api';
import AnnouncementBar from '../components/announcement-bar';

export default apiInitializer('1.14.0', (api) => {
  api.renderInOutlet(settings.plugin_outlet.trim(), AnnouncementBar);
});
