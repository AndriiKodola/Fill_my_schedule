import React, { PureComponent } from 'react';
import WorkHoursInput from './WorkHoursInput';
import DayParametersInput from './DayParametersInput';
import TargetMonthInput from './TargetMonthInput';

class InteractionPanel extends PureComponent {
    render () {
        return (
            <div id="input-container">
                <form id="input-form" action="index.html" method="post" onSubmit={this.props.handleSubmit}>
                    <span>Please, enter:</span><br></br>

                    <WorkHoursInput
                        handleValueChange={this.props.updateHours}
                    />
                    <DayParametersInput
                        handleValueChange={this.props.updateNonHours}
                    />
                    <TargetMonthInput
                        handleValueChange={this.props.updateNonHours}
                    />
                    
                    <button id="submit-button" type="submit">Generate new schedule</button>
                </form>
            </div>
        );
    }
}

export default InteractionPanel;