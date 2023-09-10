
import Footer from "../components/rightSideView/Footer";
import MightLike from "../components/rightSideView/MightLike";
import SearchEngine from "../components/rightSideView/SearchEngine";
import TrendingAccount from "../components/rightSideView/TrendingAccount";


function RightSide(props) {


    return (
        <div className={props.className}>
            <SearchEngine />
            <MightLike />
            <TrendingAccount />
            <Footer />
        </div>
    );
}

export default RightSide;




