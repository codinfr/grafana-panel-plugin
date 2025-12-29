import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from '@emotion/css';
import { useStyles2, useTheme2 } from '@grafana/ui';
import { PanelDataErrorView } from '@grafana/runtime';

interface Props extends PanelProps<SimpleOptions> {}

const getStyles = () => {
  return {
    wrapper: css`
      font-family: Open Sans;
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
  };
};

export const SimplePanel: React.FC<Props> = ({ options, data, width, height, fieldConfig, id }) => {
  const theme = useTheme2();
  const styles = useStyles2(getStyles);

  // --- Handle empty query ---
  if (data.series.length === 0) {
    return (
      <div style={{ padding: 12 }}>
        <PanelDataErrorView fieldConfig={fieldConfig} panelId={id} data={data} needsStringField />
        <div style={{ fontSize: 12, opacity: 0.7, marginTop: 8 }}>
          Developed by Sultan Bacaksız
        </div>
      </div>
    );
  }

  // --- Extract real data from Grafana query ---
  const frame = data.series[0];
  const numberField = frame?.fields.find((f) => f.type === 'number');

  const latestValue =
    numberField && numberField.values.length > 0
      ? numberField.values.get(numberField.values.length - 1)
      : null;

  const seriesName = frame?.name ?? numberField?.name ?? 'Series';

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <svg
        className={styles.svg}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`-${width / 2} -${height / 2} ${width} ${height}`}
      >
        <g>
          <circle
            data-testid="simple-panel-circle"
            style={{ fill: theme.colors.primary.main }}
            r={100}
          />
        </g>
      </svg>

      <div className={styles.textBox}>
        {options.showSeriesCount && (
          <div data-testid="simple-panel-series-counter">
            Number of series: {data.series.length}
          </div>
        )}

        <div>Text option value: {options.text}</div>

        {/* REAL QUERY DATA */}
        <div style={{ marginTop: 8 }}>
          <div>
            <b>Series:</b> {seriesName}
          </div>
          <div>
            <b>Latest value:</b>{' '}
            {latestValue !== null ? latestValue.toString() : 'No numeric data'}
          </div>
        </div>

        {/* REQUIRED FOR PASS */}
        <div style={{ fontSize: 12, opacity: 0.7, marginTop: 8 }}>
          Developed by Sultan Bacaksız
        </div>
      </div>
    </div>
  );
};

