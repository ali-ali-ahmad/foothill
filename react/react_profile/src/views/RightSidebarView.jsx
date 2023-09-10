
import MightLike from "../components/MightLike";
import SearchEngine from "../components/SearchEngine";


function RightSideView(props) {


    return (
        <div className={props.className}>
            <SearchEngine />
            <MightLike />
        </div>
    );
}

export default RightSideView;




