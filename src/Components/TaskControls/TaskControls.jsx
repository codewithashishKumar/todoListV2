import './TaskControls.css'
import { ArrowDownWideNarrow } from 'lucide-react';
const TaskControls = ({ showIncomplete, setShowIncomplete, sortTasks }) => {
    return (
        <section className="TaskControls">
            <div>
                <input type="checkbox" checked={showIncomplete} name="order" id="order" onChange={() => setShowIncomplete(!showIncomplete)} />
                <label>Show only Incomplete</label>
            </div>
            <div onClick={sortTasks}>
                <ArrowDownWideNarrow />
            </div>
        </section>
    )
}

export default TaskControls;