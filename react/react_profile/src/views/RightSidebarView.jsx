
import MightLike from "../components/MightLike";
import SearchEngine from "../components/SearchEngine";
import TrendingAccount from "../components/TrendingAccount";


function RightSideView(props) {


    return (
        <div className={props.className}>
            <SearchEngine />
            <MightLike />
            <TrendingAccount />
        </div>
    );
}

export default RightSideView;




