import './productDetailsLoaderSkeleton .css';

export default function ProductDetailsLoaderSkeleton() {
  return (
    <div className="item-details skeleton">
      <div className="container">
        <div className="imgs-item">
          <div className="big-img skeleton-box"></div>
          <div className="sm-img">
            <div className="skeleton-box small"></div>
            <div className="skeleton-box small"></div>
            <div className="skeleton-box small"></div>
          </div>
        </div>

        <div className="details-item">
          <div className="skeleton-box title"></div>
          <div className="skeleton-box stars"></div>
          <div className="skeleton-box price"></div>
          <div className="skeleton-box desc"></div>
          <div className="skeleton-box button"></div>
        </div>
      </div>
    </div>
  );
}
