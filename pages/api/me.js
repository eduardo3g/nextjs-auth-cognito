import { withSSRContext } from 'aws-amplify';
import '../../configureAmplify';

export default async (req, res) => {
  try {
    const { Auth } = withSSRContext({ req });
    const user = await Auth.currentAuthenticatedUser();
    console.log('user: ', user);
  
    res.status(200).json({ name: user })
  } catch (err) {
    console.log({ err });

    return res.status(401).json({ err });
  }
}
