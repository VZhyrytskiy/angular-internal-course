import { GeneratorService } from './generator.service';

export function GeneratorFactory(length: number) {
  return function(generator: GeneratorService): string {
    return generator.generate(length).toUpperCase()
  }
}
