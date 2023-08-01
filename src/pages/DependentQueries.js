import axios from "axios";
import { useQuery } from "react-query";

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};
const fetchCoursesByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

const DependentQueries = ({ email }) => {
  const { data: user } = useQuery(["user", email], () =>
    fetchUserByEmail(email)
  );

  const channelId = user?.data.channelId;
  const { data: channels } = useQuery(
    ["courses", channelId],
    () => fetchCoursesByChannelId(channelId),
    {
      //after the channelId is retrieved   :l;kfetch channels
      enabled: !!channelId,
    }
  );
  const courses = channels?.data.courses;
  return <div>DependentQueries</div>;
};

export default DependentQueries;
