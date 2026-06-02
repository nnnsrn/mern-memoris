import { Link } from "react-router-dom";

const NotesNotFound = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body text-center gap-4">
          <h2 className="text-2xl font-bold">No notes yet</h2>
          <p className="text-base-content/70">Create your first note to start filling the board.</p>
          <div>
            <Link to="/create" className="btn btn-primary">
              Create Note
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesNotFound;