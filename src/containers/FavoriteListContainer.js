import FavoriteList from '../components/molecules/FavoriteList';
import { connect } from 'react-redux';

export default connect(
    (state) => ({
        contacts: state.contacts
    })
)(FavoriteList);