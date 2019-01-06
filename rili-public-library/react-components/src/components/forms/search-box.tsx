import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
// import 'rili-public-library/styles/icons.scss'; // tslint:disable-line no-implicit-dependencies
import Input from './input';
import VALIDATIONS from '../../constants/validations';

class SearchBox extends React.Component<any, any> {
    static propTypes: any = {
        autoComplete: PropTypes.oneOf(['off', 'on']),
        disabled: PropTypes.bool,
        id: PropTypes.string.isRequired,
        labelText: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        onSearch: PropTypes.func.isRequired,
        translate: PropTypes.func.isRequired,
        value: PropTypes.string.isRequired,
        validations: PropTypes.arrayOf(PropTypes.oneOf(Object.keys(VALIDATIONS))),
    };

    static defaultProps: any = {
        autoComplete: 'on',
        disabled: false,
        isRequired: false,
        validations: [],
    };

    private onBlur: any;
    private onFocus: any;

    constructor(props: any) {
        super(props);

        this.state = {
            inputValue: props.value,
            isDirty: !!props.value,
            isActive: false,
        };

        this.onBlur = () => {
            this.setState({
                isActive: false,
            });
        };

        this.onFocus = () => {
            this.setState({
                isActive: true,
            });
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentWillReceiveProps(nextProps: any) {
        this.setState({
            inputValue: nextProps.value,
        });
    }

    handleInputChange(key: any, value: any) {
        this.setState({
            inputValue: value,
            isDirty: !!value.length,
        });
        this.props.onChange(key, value);
    }

    handleSearch(event: any) {
        this.props.onSearch(event, this.state.inputValue);
    }

    render() {
        const { autoComplete, disabled, id, labelText, name, translate, validations } = this.props;
        const { inputValue, isActive, isDirty } = this.state;
        const additionalClasses = classNames({
            'is-dirty': isDirty,
            'is-active': isActive,
        });

        return (
            <div className={`search-box icon-medium search ${additionalClasses}`}>
                <label htmlFor={id}>{labelText}</label>
                <Input
                    autoComplete={autoComplete}
                    disabled={disabled}
                    id={id}
                    name={name}
                    onChange={this.handleInputChange}
                    onBlur={this.onBlur}
                    onEnter={this.handleSearch}
                    translate={translate}
                    type="search"
                    onFocus={this.onFocus}
                    validations={validations}
                    value={inputValue}
                />
            </div>
        );
    }
}

export default SearchBox;