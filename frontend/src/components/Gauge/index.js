import SvgGauge from 'svg-gauge';
import { useRef, useEffect } from 'react';

const defaultOptions = {
    min: 0,
    max: 100,
    dialStartAngle: 180,
    dialEndAngle: 0,
    value: 50,
    viewBox: "0 0 100 57",
    color: (value) => {
        if (value > 60) {
            return "#5ee432";
        } else if (value > 40) {
            return "#fffa50";
        } else if (value > 20) {
            return "#f7aa38";
        } else {
            return "#ef4655";
        }
    }
}

const Gauge = props => {
    const gaugeEl = useRef(null);
    const gaugeRef = useRef(null);

    useEffect(() => {
        if (!gaugeRef.current) {
            const options = { ...defaultOptions, ...props };
            gaugeRef.current = SvgGauge(gaugeEl.current, options);
            gaugeRef.current.setValue(options.initialValue);
        }
        gaugeRef.current.setValueAnimated(props.value, 1);
    }, [props]);

    return <div ref={gaugeEl} className="gauge-container" />;
};

export default Gauge;