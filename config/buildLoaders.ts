import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { ModuleOptions } from 'webpack'

export function buildLoaders(): ModuleOptions['rules'] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }
  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
  }
  const fontsLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'assets/fonts/[name][ext]',
    },
  }
  const imgLoader = {
    test: /\.(svg|jpg|jpeg)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'assets/images/[name][ext]',
    },
  }
  const audioLoader = {
    test: /\.mp3$/i,
    type: 'asset/resource',
    generator: {
      filename: 'assets/sounds/[name][ext]',
    },
  }

  return [tsLoader, sassLoader, fontsLoader, imgLoader, audioLoader]
}
