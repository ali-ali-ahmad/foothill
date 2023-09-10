
import Footer from "../components/Footer";
import MightLike from "../components/MightLike";
import SearchEngine from "../components/SearchEngine";
import TrendingAccount from "../components/TrendingAccount";


function RightSideView(props) {


    return (
        <div className={props.className}>
            <SearchEngine />
            <MightLike />
            <TrendingAccount />
            <Footer />
        </div>
    );
}

export default RightSideView;




