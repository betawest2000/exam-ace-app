import { getExam, getExamQuestions } from "./procedures/get-exam";
import { countFavorites, getFavorites } from "./procedures/get-favorites";
import { listExams } from "./procedures/list-exams";
import { toggleFavorite } from "./procedures/toggle-favorite";

export const quizRouter = {
	exams: {
		list: listExams,
		get: getExam,
		questions: getExamQuestions,
	},
	favorites: {
		get: getFavorites,
		count: countFavorites,
		toggle: toggleFavorite,
	},
};
