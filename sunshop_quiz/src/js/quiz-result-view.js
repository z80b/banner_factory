class QuizResultView extends Backbone.View {
    constructor(props) {
        super(props);
        this.tagName = 'div';
        this.template = this.options.template;
    }
    
    initialize() {
        this.listenTo(this.model, 'change:result', this.setClass.bind(this));
    }
    
    get className() { return 'lp-game__slide' }
    
    get events() {
        return {
            'click .js-game-restart': 'restartQuiz',
            'click .js-more-discounts': 'restartQuiz'
        }
    }
    
    render() {
        this.$el.html(this.template());
        return this.el;        
    }
    
    setClass(model) {
        let steps = model.get('steps');
        this.$('.lp-game__result').toggleClass('lp-game__result--success', this.model.get('result'));
        this.$('.lp-game__result').toggleClass('lp-game__result--fail', !this.model.get('result'));
        for (let key in steps) {
            this.$(`.lp-game__result-dot--${parseInt(key) + 1}`).toggleClass('lp-game__result-dot--success', steps[key])
        }
        if (this.model.get('result')) {
            Backbone.trigger('quiz:success');
        }
    }
    
    restartQuiz(event) {
        event && event.preventDefault();
        this.model.reset();
        Backbone.trigger('quiz:restart');
    }
    
    lookAnswers() {
        
    }
}

export default QuizResultView;