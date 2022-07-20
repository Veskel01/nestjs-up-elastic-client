import { Property } from './document-property.decorator';
import { InjectElasticClient } from './elastic-client.decorator';
import { ElasticDocument } from './elastic-document.decorator';
import { InjectElasticRepository } from './elastic-repository.decorator';
import { InjectDocumentMetadata } from './document-metadata.decorator';

export {
  ElasticDocument,
  InjectElasticClient,
  InjectElasticRepository,
  Property,
  InjectDocumentMetadata
};
