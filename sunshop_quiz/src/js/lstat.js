class LStatView extends Backbone.View {
    constructor(props) {
        super(props);
    }
    
    initialize() {
        this.listenTo(Backbone, 'subscribe:success', this.headSubscribeSuccess.bind(this));
        this.listenTo(Backbone, 'black_mark_subscribe:success', this.subscribeSuccess.bind(this));
        this.listenTo(Backbone, 'black_mark_sku:fail',  this.report.bind(this, 'alert', {
            'text': 'артикул не участвует в акции',
            'block': 'black_mark',
            'page_type': 'bf2018'
        }));
    }
    
    get events() {
        return {
            'click .lp-bonus__button': this.report.bind(this, 'click', {
                'action_type': 'open_catalog',
                'block': 'bonus',
                'page_type': 'bf2018'
            }),
            'click .lp-game__actions-button': this.report.bind(this, 'click', {
                'action_type': 'open_catalog',
                'block': 'game',
                'page_type': 'bf2018'
            }),
            'click .lp-blacklabel__actions-button': this.report.bind(this, 'click', {
                'action_type': 'open_catalog',
                'block': 'black_mark',
                'page_type': 'bf2018'
            }),
            'click .lp-blacklabel__form-submit': this.report.bind(this, 'click', {
                'action_type': 'submit_sku',
                'block': 'black_mark',
                'page_type': 'bf2018'
            }),
            'click .lp-menu__link': 'menuLinkClick',
            'click .lp-awards-tab__link': 'moreDiscountsClick',
            'click .lp-share__button--vk': this.report.bind(this, 'share', { 'page_type': 'bf2018' }),
            'click .lp-share__button--fb': this.report.bind(this, 'share', { 'page_type': 'bf2018' })
        }
    }
    
    menuLinkClick(event) {
        this.report('menu_click', {
            'title': event.currentTarget.innerText,
            'page_type': 'bf2018'
        });
    }
    
    subscribeSuccess(data) {
        this.report('subscribe', {
            'source': 'bf2018',
            'email': data.email,
            'gender': data.gender,
            'block': 'black_mark'
        });
    }
    
    headSubscribeSuccess(data) {
        this.report('subscribe', {
            'source': 'bf2018',
            'email': $('.lp-subscription__form [name=email]').val(),
            'gender': $('.lp-subscription__form [name=gender]').val(),
            'block': 'header'
        });
    }
    
    moreDiscountsClick(event) {
        let eventLabels = {
            'tab-0': 'bonus',
            'tab-1': 'black_mark',
            'tab-2': 'game'
        };
        
        let actionType = {
            'tab-0': 'more',
            'tab-1': 'play_game',
            'tab-2': 'play_game'
        };
        
        this.report('click', {
            'action_type': actionType[event.currentTarget.getAttribute('for')],
            'block': eventLabels[event.currentTarget.getAttribute('for')],
            'page_type': 'bf2018'
        });
    }
    
    report(action = '', props = '') {
        LMDA.Statistics.report('bf2018', action, props);
    }
}

export default LStatView;