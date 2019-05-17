import QuizStepView from './quiz-steps-view.js';
import QuizResultView from './quiz-result-view.js';
import QuizResultFormView from './quiz-result-form-view.js';
import QuizSteps from './quiz-collection.js';
import QuizResultModel from './quiz-result-model.js';
import LStatView from './lstat.js';


class QuizView extends Backbone.View {
    constructor(props) {
        super(props);
    }
    
    initialize() {
        this.template = this.initTemplates();
        this.skus = this.$('[name=quiz]').map((ix, el) => { return [el.value.split(',')] }).get();
        this.collection = new QuizSteps();
        this.collection.update(this.skus);
        
        this.listenTo(this.collection, 'collection:ready', this.render.bind(this));
        this.listenTo(Backbone, 'quiz-model:cahge', this.onAnswered.bind(this));
        this.listenTo(Backbone, 'quiz:restart', this.restartQuiz.bind(this));
        this.listenTo(Backbone, 'game:over', this.gameOver.bind(this));
        
        this.$('.lp-game__slider-button--next').on('click', this.goNextStep.bind(this));
        this.$('.lp-game__slider-button--prev').on('click', this.goPrevStep.bind(this));
        
        if (!this.quizResultModel) {
            window.quizResultModel = this.quizResultModel = new QuizResultModel();
        }
        this.$el.addClass('lp-game-begining');
    }
    
    get events() {
        return {
            'click .js-look-answers': 'lookAnswers'
        }
    }
    
    initTemplates() {
        return _(this.$('[type="text/template"]'))
            .reduce((obj, el) => { obj[el.id] = _.template(el.innerText); return obj }, {});
    }
       
    render() {
        this.$('.js-game-slider').empty();
        
        _(this.collection.models).each((model, index) => {
            model.set('step', index);
            let quizStepView = new QuizStepView({
                id: 'qwiz-step-' + index,
                model: model,
                template: this.template.gameSlide
            });
            
            let quizStepElement = quizStepView.render();
            this.$('.js-game-slider').append(quizStepElement);
        });
        
        const quizResultView = new QuizResultView({
            model: this.quizResultModel,
            template: this.template.gameResultSlide
        });
        this.$('.js-game-slider').append(quizResultView.render());
        
        this.resultForm = new QuizResultFormView({ el: '.js-quiz-form' });
            
    }
    
    lookAnswers() {
        this.$('.lp-game').attr('data-step', 2);
    }
    
    goNextStep() {
        let step = parseInt(this.$('.lp-game').attr('data-step')) + 1;
        this.$('.lp-game').attr('data-step', step);
    }
    goPrevStep() {
        let step = parseInt(this.$('.lp-game').attr('data-step')) - 1;
        this.$('.lp-game').attr('data-step', step);
    }
    
    setStep(number = 0) {
        if (number >= 0 && number <= 3) {
            this.$('.lp-game').attr('data-step', number);
        }
    }
    
    onAnswered(model) {
        let currentStep = model.get('step');
        setTimeout(this.setStep.bind(this, currentStep + 1), 500);
    }
    
    restartQuiz() {
        this.$('.lp-game').attr('data-step', 0);
        this.$('.lp-game__slider-button').addClass('element-hidden');
        this.$el.addClass('lp-game-begining');
        this.collection.reset();
        this.collection.update(this.$('[name=quiz]').map((ix, el) => { return [el.value.split(',')] }).get());
    }
    
    gameOver() {
        this.$('.lp-game__slider-button').removeClass('element-hidden');
        this.$el.removeClass('lp-game-begining');
    }
}

export default QuizView;